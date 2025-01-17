terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.2"
    }
  }
}

provider "docker" {
  host = "npipe:////./pipe/docker_engine" # For Docker Desktop on Windows
}

resource "docker_image" "node_app_image" {
  name = "node-app-image:latest"

  build {
    context    = "${path.module}"        # Use the current directory as the build context
    dockerfile = "Dockerfile"             # Ensure Dockerfile is in the root of the directory
  }
}

output "image_name" {
  value = docker_image.node_app_image.name
}
