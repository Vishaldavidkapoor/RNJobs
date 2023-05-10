import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
  <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}
  >
    <Text style={styles.btnText(name,activeTab)}>{name}</Text>
  </TouchableOpacity>;
};

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={[{ flexDirection: "row" }, { ...styles.container }]}>
      {/* <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      /> */}
      {tabs?.map((item)=> (
        <TouchableOpacity style={styles.btn(item, activeTab)}
        onPress={()=>setActiveTab(item)}>
          <Text style={styles.btnText(item,activeTab)}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Tabs;
