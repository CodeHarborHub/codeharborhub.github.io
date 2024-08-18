import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SolutionAuthor from '@site/src/components/SolutionAuthor';
import TutorialAuthors from '@site/src/components/TutorialAuthors';
import Contributors from '@site/src/components/Contributors';
import Table from '@site/src/components/Table';
import ArrayVisualizations from '@site/src/components/DSA/arrays/ArrayVisualizations';
import SelectionSortVisualization from '@site/src/components/DSA/arrays/SelectionSortVisualization';
import BubbleSortVisualization from '@site/src/components/DSA/arrays/BubbleSortVisualization';
import BrowserWindow from '@site/src/components/BrowserWindow';
import GiscusComponent from '@site/src/components/GiscusComponent';
import CollectionList from '@site/src/components/CollectionList';
import { FaReact } from 'react-icons/fa';
import Courses from '@site/src/components/Courses';
import DocCardList from '@theme/DocCardList';
import Highlight from '@site/src/components/Highlight';
import InsertionSortVisualization from '@site/src/components/DSA/arrays/InsertionSortVisualization';
import File from '@site/src/components/File';
import Lesson from '@site/src/components/Lesson';
import Image from '@theme/IdealImage';
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Author from '@site/src/components/Author';
import LinearSearchVisualizer from '@site/src/dsa/searching-algorithms/LinearSearchVisualizer';
import AdsComponent from '@site/src/components/AdsComponent';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // custom
  SolutionAuthor,
  Tabs,
  TabItem,
  TutorialAuthors,
  Table,
  Contributors,
  BrowserWindow,
  Highlight,
  GiscusComponent,
  ArrayVisualizations,
  BubbleSortVisualization,
  SelectionSortVisualization,
  CollectionList,
  DocCardList,
  FaReact,
  Courses,
  InsertionSortVisualization,
  File,
  Lesson,
  Image,
  LiteYouTubeEmbed,
  Author,
  LinearSearchVisualizer,
  AdsComponent
};