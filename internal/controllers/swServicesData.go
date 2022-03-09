package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/blyndusk/flamingops/internal/middlewares"
	"github.com/blyndusk/flamingops/pkg/models"
)

func CreateSwServicesData(c *gin.Context) {
	var input models.SwServicesDataInput
	middlewares.CreateSwServicesData(c, &input)
	c.JSON(http.StatusOK, input)
}

func GetSwServicesData(c *gin.Context) {
	var swServicesData models.SwServicesData
	middlewares.GetSwServicesData(c, &swServicesData)
	c.JSON(http.StatusOK, swServicesData)
}

func DeleteSwServicesData(c *gin.Context) {
	var swServicesData models.SwServicesData
	middlewares.DeleteSwServicesData(c, &swServicesData)
	c.JSON(http.StatusOK, gin.H{
		"message": "SwServicesData deleted successfully",
	})
}
