package entities

import (
	"github.com/jinzhu/gorm"
)

type Subscription struct {
	gorm.Model
	Email            string
	Role             string
	SubscriptionType string
}
