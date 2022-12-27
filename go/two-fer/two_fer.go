// Given a name, returns a string with the message:
// "One for name, one for me."
// If name is an empty string, it returns:
// "One for you, one for me."
// https://golang.org/doc/effective_go.html#commentary
package twofer

// ShareWith should have a comment documenting it.
func ShareWith(name string) string {
	if name == "" {
		name = "you"
	}

	return "One for " + name + ", one for me."
}
