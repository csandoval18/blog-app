package main

import (
	"net/http"

	"github.com/csandoval18/blog-app/tree/main/server/src/utils"
	"github.com/gin-gonic/gin"
)

func main() {
	utils.ConnectDB()
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Hello, world!")
	})
	r.Run() // listen and serve on 0.0.0.0:8080
}
