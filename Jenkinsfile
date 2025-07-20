pipeline {
    agent any
    
    tools {
        nodejs 'Node16'
    }
    
    environment {
        GITHUB_TOKEN = credentials('github-token')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    sh '''
                        git config --global user.email "alejandro.choy@gmail.com"
                        git config --global user.name "Alejandro"
                        git checkout gh-pages || git checkout -b gh-pages
                        cp -r dist/* .
                        git add .
                        git commit -m "Automated deployment by Jenkins"
                        git push https://${GITHUB_TOKEN}@github.com/achoya/calculadora.git gh-pages -f
                    '''
                }
            }
        }
    }
}
