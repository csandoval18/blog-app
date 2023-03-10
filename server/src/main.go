package main

import (
	"fmt"
	"net/http"

	e "github.com/csandoval18/blog-app/tree/main/server/src/entities"
	"github.com/csandoval18/blog-app/tree/main/server/src/utils"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

func main() {
	utils.ConnectDB()
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Server running.")
	})
	err := http.ListenAndServe(":4000", r)
	if err != nil {
		panic(err)
	}
	// r.Run() // listen and serve on 0.0.0.0:8080
}

func canAccessPremium(user e.User) bool {
	if user.Subscription.Role == "paid" {
		return true
	}
	return false
}

func getArticle(db *gorm.DB, id uint, user e.User) (e.Article, error) {
	var article e.Article
	if err := db.First(&article, id).Error; err != nil {
		return article, err
	}
	if !article.Premium || canAccessPremium(user) {
		return article, nil
	}
	return article, fmt.Errorf("unauthorized")
}
