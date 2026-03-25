import { lazy } from 'react'

const HomeScreen = lazy(() => import('./screen/HomeScreen'))
const LayoutScreen = lazy(() => import('./screen/LayoutScreen'))
const RemoveBackgroundScreen = lazy(() => import('./screen/RemoveBackgroundScreen'))
const RemoveObjectScreen = lazy(() => import('./screen/RemoveObjectScreen'))
const ReviewResumeScreen = lazy(() => import('./screen/ReviewResumeScreen'))
const WriteArticleScreen = lazy(() => import('./screen/WriteArticleScreen'))
const BlogTitlesScreen = lazy(() => import('./screen/BlogTitlesScreen'))
const CommunityScreen = lazy(() => import('./screen/CommunityScreen'))
const DashboardScreen = lazy(() => import('./screen/DashboardScreen'))
const GenerateImageScreen = lazy(() => import('./screen/GenerateImageScreen'))

export {
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
}
