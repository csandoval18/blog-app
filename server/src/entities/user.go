package entities

import (
	"github.com/jinzhu/gorm"
)

type User struct {
	gorm.Model
	Email        string
	Password     string
	FirstName    string
	LastName     string
	Subscription Subscription
}
