variable "container" {}
variable "prefix" {}

terraform {
  backend "remote" {
    organization = "lvksh"

    workspaces {
      name = "${var.prefix}resume"
    }
  }
}

provider "kubernetes" {

}

resource "kubernetes_pod" "resume" {
  metadata {
    name      = "${var.prefix}resume"
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
    name      = "${var.prefix}resume-service"
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
    name      = "${var.prefix}resume"
    namespace = "lvksh"
    annotations = {
      "traefik.ingress.kubernetes.io/router.tls"              = "true"
      "traefik.ingress.kubernetes.io/router.tls.certresolver" = "letsencrypt"
      "traefik.ingress.kubernetes.io/priority"                = "4"
    }
  }
  spec {
    rule {
      host = "resume.lvk.sh"
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
