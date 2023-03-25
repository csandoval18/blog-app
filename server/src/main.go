package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"os/exec"
	"os/signal"
	"syscall"

	"github.com/csandoval18/blog-app/tree/main/server/src/utils"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	go func() {
		cmd := exec.Command("gin", "--appPort", "3000", "--port", "4000", "run", "main.go")
		cmd.Stdout = os.Stdout
		cmd.Stderr = os.Stderr
		err := cmd.Run()
		if err != nil {
			log.Fatal(err)
		}
	}()
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
	// Wait for a signal to stop the server
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	<-c
}
