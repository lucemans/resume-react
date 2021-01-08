variable "container" {}
variable "prefix" {}
variable "deployurl" {}

terraform {
  backend "remote" {}
}

provider "kubernetes" {

}

resource "kubernetes_pod" "resume" {
  metadata {
    name      = "resume${var.prefix}"
    namespace = "lvksh"
    labels = {
      app = "resume"
    }
  }

  spec {
    container {
      image = var.container
      name  = "resume"

      port {
        container_port = 80
      }

      liveness_probe {
        http_get {
          path = "/"
          port = 80
        }

        initial_delay_seconds = 3
        period_seconds        = 3
      }
    }
    image_pull_secrets {
      name = "regcred"
    }
  }
}

resource "kubernetes_service" "resume" {
  metadata {
    name      = "resume-service${var.prefix}"
    namespace = "lvksh"
  }

  spec {
    selector = {
      app = "resume"
    }
    type = "ClusterIP"
    port {
      port        = 80
      target_port = 80
    }
  }
}

resource "kubernetes_ingress" "resume" {
  metadata {
    name      = "resume${var.prefix}"
    namespace = "lvksh"
    annotations = {
      "traefik.ingress.kubernetes.io/router.tls"              = "true"
      "traefik.ingress.kubernetes.io/router.tls.certresolver" = "letsencrypt"
      "traefik.ingress.kubernetes.io/priority"                = "4"
    }
  }
  spec {
    rule {
      host = var.deployurl
      http {
        path {
          path = "/"
          backend {
            service_name = "resume-service"
            service_port = 80
          }
        }
      }
    }
  }
}
