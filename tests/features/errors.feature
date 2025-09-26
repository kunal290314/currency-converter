Feature: Input validation

  Scenario: Invalid amount string
    Given rates data:
      """
      { "usd": { "inr": 83.10 } }
      """
    And I have amount "abc"
    And I choose from "USD" to "INR"
    When I convert
    Then it should throw "Invalid amount"

  Scenario: Missing currency codes
    Given rates data:
      """
      { "usd": { "inr": 83.10 } }
      """
    And I have amount 10
    And I choose from "" to ""
    When I convert
    Then it should throw "Missing currency"
