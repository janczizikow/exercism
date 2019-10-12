module Acronym
  def self.abbreviate(phrase)
    words = phrase.split(/[^a-z]/i)
    words.map { |word| word[0]&.upcase }.join
  end
end
