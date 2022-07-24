pipeline {
    agent {
        docker {
            image 'node:6-alpine'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Validations') {
            steps {
                sh 'npm run lint'
            }
        }
    }
}
