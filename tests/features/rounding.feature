Feature: Rounding rule

  Scenario Outline: Round to N decimals
    Given a numeric value <val>
    When I round it to <d> decimals
    Then the rounded result should be <out>

    Examples:
      | val     | d | out   |
      | 123.456 | 2 | 123.46|
      | 1.005   | 2 | 1.01  |
      | 99.999  | 0 | 100   |
