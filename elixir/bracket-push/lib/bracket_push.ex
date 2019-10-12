defmodule BracketPush do
  @brackets_lookup %{
    "[" => "]",
    "(" => ")",
    "{" => "}",
  }

  @doc """
  Checks that all the brackets and braces in the string are matched correctly, and nested correctly
  """
  @spec check_brackets(String.t()) :: boolean
  def check_brackets(str) do
    chars = String.codepoints(str)
    check_closing_bracket(chars, [])
  end

  defp check_closing_bracket([], []), do: true
  defp check_closing_bracket([], [a]), do: false
  defp check_closing_bracket([a], [b]), do: a == b
  # defp check_closing_bracket()
  defp check_closing_bracket([letters_head | letters_tail], []) do
    if Map.has_key?(@brackets_lookup, letters_head) do
      check_closing_bracket(letters_tail, [letters_head])
    else
      false
    end
  end
  defp check_closing_bracket([letters_head | letters_tail], [stack_head | stack_tail]) do
    if Map.has_key?(@brackets_lookup, letters_head) do
      check_closing_bracket(letters_tail, [stack_head | stack_tail | letters_head])
    end
    if letters_head == stack_head do
      check_closing_bracket(letters_tail, stack_tail)
    end
    false
  end
end
