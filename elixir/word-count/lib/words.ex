defmodule Words do
  @doc """
  Count the number of words in the sentence.

  Words are compared case-insensitively.
  """
  @spec count(String.t()) :: map
  def count(sentence) do
    sentence
    |> String.downcase
    |> replace_trailing_symbols_and_punctuation
    |> String.split
    |> Enum.reduce(%{}, &count_words/2)
  end

  defp replace_trailing_symbols_and_punctuation(sentence, replacement \\ " ") do
    # ~r/\W+/ doesn't work with German
    String.replace(sentence, ~r/(^\W+|\W*$|_|:|,)/, replacement)
  end

  defp count_words(word, map) do
    Map.update(map, word, 1, &(&1 + 1))
  end
end
