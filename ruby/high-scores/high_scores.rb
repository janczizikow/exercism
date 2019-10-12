class HighScores
  attr_reader :scores, :latest

  def initialize(scores)
    @scores = scores
    @latest = scores.last
  end

  def personal_best
    @scores.max
  end

  def personal_top_three
    @scores.max(3)
  end
end