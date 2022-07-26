pipeline {
    environment {
        registry = 'phantomis/example-app'
        registryCredential = '0ef501d5-7514-4374-bf18-9efeb5de3fd9'
        dockerImage = ''
    }
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
        stage('Building our image') {
            when {
                branch 'main'
            }
            agent any
            steps {
                script {
                    props = readJSON file: 'package.json'
                    dockerImage = docker.build registry + ":${props.version}-$BUILD_NUMBER"
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push()
                    }
                    sh "docker rmi $registry:${props.version}-$BUILD_NUMBER"
                }
            }
        }

    }
}
