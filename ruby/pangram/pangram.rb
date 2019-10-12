class Pangram
  def self.pangram?(phrase)
    phrase.downcase.scan(/[a-z]/).uniq.length == 26
  end
end
