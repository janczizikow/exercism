class Phrase
  def initialize(phrase)
    @phrase = phrase
  end

  def word_count
    @phrase
      .split(' ')
      .map { |word| downcase_and_remove_trailing_symbols(word) }
      .each_with_object({}) do |word, acc|
        acc[word] ? acc[word] += 1 : acc[word] = 1
      end
  end

  private

  def downcase_and_remove_trailing_symbols(word)
    word.downcase.gsub(/(^[\W+]|\W*$)/, '')
  end
end
