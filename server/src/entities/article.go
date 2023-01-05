package entities

import (
	"time"

	"github.com/jinzhu/gorm"
)

type Article struct {
	gorm.Model
	Title     string
	Content   string
	Author    string
	Premium   bool
	CreatedAt time.Time
}
