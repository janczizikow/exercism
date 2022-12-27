// Package hamming calculates the Hamming difference between two DNA strands
package hamming

import (
	"errors"
	"unicode/utf8"
)

// Distance calculates the Hamming Distance between two DNA strands.
func Distance(a, b string) (int, error) {
	if utf8.RuneCountInString(a) != utf8.RuneCountInString(b) {
		return 0, errors.New("DNA sequences must be equal in length")
	}

	distance := 0
	bRunes := []rune(b)
	i := 0 // index runes instead of bytes

	for _, char := range a {
		if char != bRunes[i] {
			distance++
		}
		i++
	}

	return distance, nil
}
