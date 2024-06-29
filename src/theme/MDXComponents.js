import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import Author from '@site/src/components/Author';
import BrowserWindow from '@site/src/components/BrowserWindow';
import CollectionList from '@site/src/components/CollectionList';
import Contributors from '@site/src/components/Contributors';
import Courses from '@site/src/components/Courses';
import ArrayVisualizations from
    '@site/src/components/DSA/arrays/ArrayVisualizations';
import BubbleSortVisualization from
    '@site/src/components/DSA/arrays/BubbleSortVisualization';
import InsertionSortVisualization from
    '@site/src/components/DSA/arrays/InsertionSortVisualization';
import SelectionSortVisualization from
    '@site/src/components/DSA/arrays/SelectionSortVisualization';
import File from '@site/src/components/File';
import GiscusComponent from '@site/src/components/GiscusComponent';
import Highlight from '@site/src/components/Highlight';
import Lesson from '@site/src/components/Lesson';
import SolutionAuthor from '@site/src/components/SolutionAuthor';
import Table from '@site/src/components/Table';
import TutorialAuthors from '@site/src/components/TutorialAuthors';
import LinearSearchVisualizer from
    '@site/src/dsa/searching-algorithms/LinearSearchVisualizer';
import MDXComponents from '@theme-original/MDXComponents';
import DocCardList from '@theme/DocCardList';
import Image from '@theme/IdealImage';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import {FaReact} from 'react-icons/fa';
import LiteYouTubeEmbed from "react-lite-youtube-embed";

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
  LinearSearchVisualizer
};