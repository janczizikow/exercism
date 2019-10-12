defmodule Bob do
  def hey(input) do
    cond do
      is_asking?(input) ->
        if all_caps?(input), do: "Calm down, I know what I'm doing!", else: "Sure."
      is_shouting?(input) ->
        "Whoa, chill out!"
      is_silent?(input) ->
        "Fine. Be that way!"
      true ->
      	"Whatever."
    end
  end

  defp is_letter?(input), do: String.match?(input, ~r/[a-z]/i)
  defp is_uppercase?(input), do: String.upcase(input) == input

  defp all_caps?(input) do
    letters = input
      |> String.codepoints
      |> Enum.filter(&is_letter?/1)
    length(letters) > 0 and Enum.all?(letters, &is_uppercase?/1)
  end

  defp is_asking?(input) do
    String.ends_with?(input, "?")
  end

  defp is_shouting?(input) do
    all_caps?(input) and not is_asking?(input)
  end

  defp is_silent?(input) do
    input
    |> String.trim
    |> String.length == 0
  end
end
