package reverse

func Reverse(input string) string {
	reversed := ""
	for _, ch := range input {
		reversed = string(ch) + reversed
	}
	return reversed
}
