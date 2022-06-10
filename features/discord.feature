Feature: Discord
  @TEST_ET-1
  Scenario: Discord
    Given Discord login
    Then Discord fine channel KOMU
    Then Discord reply message
