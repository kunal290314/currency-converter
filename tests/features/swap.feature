Feature: Swap currency pair

  Scenario: Swap USD and INR
    Given I choose from "USD" to "INR"
    When I swap the pair
    Then the pair should be "INR" and "USD"
