pipeline {
    environment {
        registry = 'phantomis/example-app'
        registryCredential = '9cf97ef3-9686-49e4-8f9e-04c2a55241d9'
        dockerImage = ''
    }
    agent none
    stages {
        stage('Build') {
            agent {
                docker {
                    reuseNode true
                    image 'node:14-alpine'
                }
            }
            steps {
                sh 'npm install'
            }
        }
        
        stage('Test') {
            agent {
                docker {
                    reuseNode true
                    image 'node:14-alpine'
                }
            }
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
            agent {
                docker {
                    reuseNode true
                    image 'node:14-alpine'
                }
            }
            steps {
                sh 'npm run lint'
            }
        }

    }
}
