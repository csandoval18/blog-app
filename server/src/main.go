package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/csandoval18/blog-app/tree/main/server/src/utils"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	utils.ConnectDB()
	// Get the PORT number from the environment variable, or use 8080 as a default
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	// Get the value of an env variable
	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = "8080"
	}
	// Create a new Gin router
	r := gin.Default()
	// Define a handler for the root endpoint
	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Hello, world!")
	})
	// Start the server using the specified port
	err = r.Run(fmt.Sprintf(":%s", PORT))
	if err != nil {
		log.Fatal(err)
	}
}
