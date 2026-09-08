pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'TEKIS project build completed successfully!'
        }

        failure {
            echo 'TEKIS project build failed.'
        }
    }
}