import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {};

  const [data, isLoading, error, refetch] = useFetch("job-details", {
    job_id: params.id,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => {
            <ScreenHeaderBtn 
            iconUrl={icons.left} 
            dimension="60%"
            handlePress={()=>router.back()} />;
          },
          headerRight:()=>{
            <ScreenHeaderBtn 
            iconUrl={icons.share} 
            dimension="60%"
            />;
          },
          headerTitle:''
        }}
      />

      <>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl onRefresh={onRefresh}  refreshing={refreshing}/>}>
            {isLoading ? (<ActivityIndicator size='large' color={COLORS.primary} />) : error ? (<Text>Something went wrong</Text>) : data }
      </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
