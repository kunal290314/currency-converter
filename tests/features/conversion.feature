Feature: Currency conversion

  Scenario: USD -> INR valid conversion
    Given rates data:
      """
      { "usd": { "inr": 83.10, "eur": 0.92 } }
      """
    And I have amount 100
    And I choose from "USD" to "INR"
    When I convert
    Then the raw result should be 8310

  Scenario: Missing base currency rates
    Given rates data:
      """
      { "eur": { "inr": 89.0 } }
      """
    And I have amount 10
    And I choose from "USD" to "INR"
    When I convert
    Then it should throw "Rates missing for base: USD"

  Scenario: No direct rate available
    Given rates data:
      """
      { "usd": { "eur": 0.92 } }
      """
    And I have amount 10
    And I choose from "USD" to "INR"
    When I convert
    Then it should throw "No rate from USD to INR"
