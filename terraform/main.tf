provider "kubernetes" {
  cluster_ca_certificate = var.ca_certificate
  host = var.k8s_host
  username = var.k8s_username
  password = var.k8s_password
}

variable k8s_host {}
variable k8s_username {}
variable k8s_password {}
variable container {
  default="lvk.sh/resume:latest"
}

resource "kubernetes_pod" "resume" {
  metadata {
    name      = "resume"
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
    name      = "resume-service"
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
    name      = "resume"
    namespace = "lvksh"
    annotations = {
      "traefik.ingress.kubernetes.io/router.tls" = "true"
      "traefik.ingress.kubernetes.io/router.tls.certresolver" = "letsencrypt"
      "traefik.ingress.kubernetes.io/priority" = "4"
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
