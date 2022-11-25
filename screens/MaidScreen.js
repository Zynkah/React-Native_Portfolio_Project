import { useState } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Card, ListItem, Avatar } from "react-native-elements";
import { MAIDS } from "../shared/MAIDS";

const MaidScreen = () => {
  const [maids, setMaids] = useState(MAIDS);
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <Card.Title style={styles.title}>Our Mission</Card.Title>
        <Card.Divider />
        <Text style={styles.mission}>
          Maid cafes focus on providing an escape from the home and work
          spheres. Maids encapsulate a more pure form of service that provides
          an alternate world to patrons.
        </Text>
      </Card>
      <Card>
        <Card.Title style={styles.title}>Our Maids</Card.Title>
        <Card.Divider />
        {maids.map((maid) => {
          return (
            <ListItem key={maid.id}>
              <Avatar source={maid.image} size={100} />
              <ListItem.Content>
                <ListItem.Title style={styles.title}>
                  {maid.name}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.description}>
                  {maid.description}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#cc3366",
    fontSize: 24,
  },
  description: {
    fontSize: 16,
    color: "#db7094",
  },
  mission: {
    color: "#db7094",
    fontSize: 16,
    textAlign: "center",
  },
});
export default MaidScreen;
