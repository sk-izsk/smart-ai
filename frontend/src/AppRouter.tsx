import { Route, Routes } from "react-router";
import {
  BlogTitlesScreen,
  CommunityScreen,
  DashboardScreen,
  GenerateImageScreen,
  HomeScreen,
  LayoutScreen,
  RemoveBackgroundScreen,
  RemoveObjectScreen,
  ReviewResumeScreen,
  WriteArticleScreen,
} from "./lazyComponents";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/ai" element={<LayoutScreen />}>
        <Route index element={<DashboardScreen />} />
        <Route path="write-article" element={<WriteArticleScreen />} />
        <Route path="blog-titles" element={<BlogTitlesScreen />} />
        <Route path="generate-images" element={<GenerateImageScreen />} />
        <Route path="remove-background" element={<RemoveBackgroundScreen />} />
        <Route path="remove-object" element={<RemoveObjectScreen />} />
        <Route path="review-resume" element={<ReviewResumeScreen />} />
        <Route path="community" element={<CommunityScreen />} />
      </Route>
    </Routes>
  );
};
