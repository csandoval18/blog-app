package main

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

func dbConn() {
	// Connect to the database
	db, err := sql.Open("postgres", "user=postgres password=mypassword dbname=mydatabase sslmode=disable")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer db.Close()

	// Check that the connection is working
	err = db.Ping()
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println("Connected to the database!")
}
