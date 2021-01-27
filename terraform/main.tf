variable "container" {}
variable "prefix" {}
variable "deployurl" {}

terraform {
  backend "remote" {}
}

provider "kubernetes" {
    host = "https://144.76.62.53:6443"
}

resource "kubernetes_pod" "resume" {
  metadata {
    name      = "${var.prefix}resume"
    namespace = "lvksh"
    labels = {
      app = "${var.prefix}resume"
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
      app = "${var.prefix}resume"
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
      host = var.deployurl
      http {
        path {
          path = "/"
          backend {
            service_name = "${var.prefix}resume-service"
            service_port = 80
          }
        }
      }
    }
  }
}
