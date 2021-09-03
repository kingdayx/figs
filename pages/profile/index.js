import React from "react";
import {
  Flex,
  Box,
  Text,
  Image,
  SimpleGrid,
  Input,
  Button,
} from "@chakra-ui/core";
import styled from "styled-components";

export default function Profile() {
  const renderItems = () => {
    return (
      <Flex w="100%" flexDirection="row" bg="#1E1A21" p="0 10px">
        <Flex
          w="100%"
          maxW="70rem"
          flexDirection="column"
          margin="0 auto"
          marginTop="50px"
          marginBottom="250px"
        >
          <Flex flexDirection="column">
            <SimpleGrid spacing="2rem" minChildWidth="15rem" w="100%">
              {discovers.map((item, index) => {
                return (
                  <Card>
                    <StyledBox
                      p="1rem 1.5rem"
                      // bg={index === 0 ? "#651AB2" : "#26212A"}
                      borderRadius="10px"
                      border="1px solid #651AB2"
                      key={index}
                      className="Box"
                    >
                      <div className="Box">
                        <Flex
                          flexDirection="row"
                          mt="0.2rem"
                          justifyContent="center"
                        >
                          <Box>
                            <Text fontSize="16px" fontWeight="500">
                              {item.name}{" "}
                            </Text>
                          </Box>
                        </Flex>
                        <Image
                          src={"/images/vaults/" + item.image}
                          w="20rem"
                          h="15rem"
                          justify="center"
                          marginTop="1rem"
                        />
                        <Flex
                          flexDirection="row"
                          mt="0.5rem"
                          justifyContent="center"
                        >
                          <Text fontSize="12px">
                            {" "}
                            Stake {item.name} and earn $FIGGY{" "}
                          </Text>
                        </Flex>
                        <Flex
                          flexDirection="column"
                          mt="0.5rem"
                          justifyContent="center"
                        >
                          <Text fontSize="10px">$FIGGY earned</Text>
                        </Flex>
                        {/* <StyledCardActions>
                            {!account && (
                              <UnlockButton>Approve Contract</UnlockButton>
                            )}
                            {account &&
                              (needsApproval && !isOldSyrup ? (
                                <div style={{ flex: 1 }}>
                                  <Button
                                    disabled={isFinished || requestedApproval}
                                    onClick={handleApprove}
                                    fullWidth
                                  >
                                    {`Approve ${stakingTokenName}`}
                                  </Button>
                                </div>
                              ) : (
                                <>
                                  <Button
                                    disabled={
                                      stakedBalance.eq(new BigNumber(0)) ||
                                      pendingTx
                                    }
                                    onClick={
                                      isOldSyrup
                                        ? async () => {
                                            setPendingTx(true);
                                            await onUnstake("0");
                                            setPendingTx(false);
                                          }
                                        : onPresentWithdraw
                                    }
                                  >
                                    {`Unstake ${stakingTokenName}`}
                                  </Button>
                                  <StyledActionSpacer />
                                  {!isOldSyrup && (
                                    <IconButton
                                      disabled={isFinished && sousId !== 0}
                                      onClick={onPresentDeposit}
                                    >
                                      <AddIcon color="background" />
                                    </IconButton>
                                  )}
                                </>
                              ))}
                          </StyledCardActions> */}

                        <Flex
                          flexDirection="row"
                          mt="0.5rem"
                          justifyContent="center"
                          marginTop="2rem"
                        >
                          <Button marginRight="4rem" minWidth="5rem">
                            Stake
                          </Button>
                          <Button marginRight="0.5rem">-</Button>
                          <Button marginLeft="0.5rem">+</Button>
                        </Flex>
                      </div>
                    </StyledBox>
                  </Card>
                );
              })}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    );
  };
  return (
    <div>
      <div>hey</div>
      {renderItems()}
    </div>
  );
}
