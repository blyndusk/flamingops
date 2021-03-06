package database

import (
	"github.com/blyndusk/flamingops/pkg/models"
	"github.com/sirupsen/logrus"
)

func Migrate() {
	_ = Db.AutoMigrate(
		&models.User{},
		&models.RequestedRegions{},
		&models.ActiveServices{},
		&models.SwServicesData{},
		&models.AwsServicesData{},
	)
	logrus.Info("Migrations done !")
}
