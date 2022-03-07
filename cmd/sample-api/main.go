package main

import (
	"net/http"
	"fmt"

	log "github.com/sirupsen/logrus"
	"github.com/blyndusk/flamingops/internal/database"
	"github.com/blyndusk/flamingops/internal/router"
	"github.com/gin-gonic/gin"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
)

func main() {
	setupServer()
	setupAwsSession()
}

func setupServer() *gin.Engine {
	database.Connect()
	database.Migrate()

	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "[flamingops | sample-api]",
		})
	})

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	router.Setup(r)
	r.Run(":3333")
	return r
}

func setupAwsSession() {
	sess := session.Must(session.NewSession(&aws.Config{
		Region: aws.String("us-east-1"),
	}))
	fmt.Println(sess)
	log.Info("AWS Session created")
}