class Integer
  LOOKUP = { M: 1000, CM: 900, D: 500, CD: 400,
             C: 100, XC: 90, L: 50, XL: 40,
             X: 10, IX: 9, V: 5, IV: 4, I: 1 }.freeze

  def to_roman
    roman = ''
    num = self
    LOOKUP.each do |k, v|
      until num < LOOKUP[k]
        roman += k.to_s
        num -= v.to_i
      end
    end

    roman
  end
end
