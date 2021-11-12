package main

import (
	"log"
	"github.com/maxence-charriere/go-app/v9/pkg/app"
)

// hello is a component that displays a simple "Hello World!". A component is a
// customizable, independent, and reusable UI element. It is created by
// embedding app.Compo into a struct.
type hello struct {
	app.Compo
}
func (h *hello) Render() app.UI {
	return app.H1().Text("Hello World!")
}

func main() {
	app.Route("/", &hello{})
	app.Route("/hello", &hello{})
	app.RunWhenOnBrowser()

	err := app.GenerateStaticWebsite(".", &app.Handler{
		Name:        "Hello",
		Description: "An Hello World! example",
		Resources:   app.GitHubPages("ra-vn.github.io"),
    })

    if err != nil {
        log.Fatal(err)
    }
}