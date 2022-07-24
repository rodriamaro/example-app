pipeline {
    agent {
        docker {
            image 'node:14-alpine'
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
            post {
                always {
                    junit 'junit.xml'
                }
            }
        }
        stage('Validations') {
            steps {
                sh 'npm run lint'
            }
        }
    }
}
