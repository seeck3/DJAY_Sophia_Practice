import { uuid } from "uuidv4";
import Faker from "faker";

const mock_data = [
  {
    id: uuid(),
    title: "Korean TV Star, Jay Lim has a scandal with Hollywood star Beyonce",
    content:
      "Occaecat reprehenderit anim sunt proident pariatur exercitation irure qui laborum sit mollit dolor. Aute aliqua laboris dolore veniam anim tempor elit laborum veniam deserunt amet cillum. Est duis magna velit exercitation eu magna consectetur. Ad cupidatat consequat nulla Lorem ex ea cupidatat nulla voluptate sint nulla irure labore esse. Sunt fugiat nostrud amet anim veniam ullamco nulla.",
    author: {
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
    },
    createdOn: Faker.date.past(10),
  },
  {
    id: uuid(),
    title:
      "World Wide Company, CEO of DJ-Sadan, Matt Seo just started new journey for tech career",
    content:
      "Dolore occaecat reprehenderit enim veniam commodo ipsum aute. Esse tempor aute consequat ea. Officia nulla mollit ullamco cupidatat laboris culpa in sunt fugiat. Et sunt adipisicing excepteur magna aute et aute ipsum eu. Tempor eu non eu ut enim ut culpa minim do qui amet et eiusmod est. Dolor ea anim deserunt exercitation excepteur irure esse cillum esse minim. Ex nostrud cillum enim aliqua aute velit mollit voluptate minim veniam dolor laboris.",
    author: {
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
    },
    createdOn: Faker.date.past(10),
  },
  {
    id: uuid(),
    title:
      "Sophia Lee has been designated to Most Beautiful Women in the world",
    content:
      "Nulla occaecat nisi pariatur eiusmod sint tempor officia dolore occaecat nulla cillum. Tempor deserunt nisi fugiat ad consequat consequat. Elit et incididunt est nulla qui velit esse exercitation duis aliquip occaecat eiusmod sunt. Dolor pariatur elit culpa nulla reprehenderit ipsum fugiat.",
    author: {
      firstName: "Marco",
      lastName: "Seo",
    },
    createdOn: Faker.date.past(10),
  },
  {
    id: uuid(),
    title: "gui chan eum",
    content:
      "Occaecat reprehenderit anim sunt proident pariatur exercitation irure qui laborum sit mollit dolor. Aute aliqua laboris dolore veniam anim tempor elit laborum veniam deserunt amet cillum. Est duis magna velit exercitation eu magna consectetur. Ad cupidatat consequat nulla Lorem ex ea cupidatat nulla voluptate sint nulla irure labore esse. Sunt fugiat nostrud amet anim veniam ullamco nulla.",
    author: {
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
    },
    createdOn: Faker.date.past(10),
  },
  {
    id: uuid(),
    title: "dae choong is title",
    content:
      "Adipisicing labore laboris sint et dolor officia exercitation reprehenderit nostrud. Consectetur exercitation proident occaecat anim cillum excepteur. Eu laborum sint Lorem laboris est elit minim. Id tempor dolore proident cillum est sit proident est. Ut sint dolore non sunt nulla velit velit in. Aute ad voluptate duis incididunt sit amet sint anim consequat magna fugiat exercitation deserunt.",
    author: {
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
    },
    createdOn: Faker.date.past(10),
  },
  {
    id: uuid(),
    title:
      "DJ, Jay, and Sophia are finally at the peak of their tech career, $200,000+ bonus",
    content:
      "Occaecat reprehenderit anim sunt proident pariatur exercitation irure qui laborum sit mollit dolor. Aute aliqua laboris dolore veniam anim tempor elit laborum veniam deserunt amet cillum. Est duis magna velit exercitation eu magna consectetur. Ad cupidatat consequat nulla Lorem ex ea cupidatat nulla voluptate sint nulla irure labore esse. Sunt fugiat nostrud amet anim veniam ullamco nulla.",
    author: {
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
    },
    createdOn: Faker.date.past(10),
  },
  {
    id: uuid(),
    title: "이거 잘따라하면 쌉고수 가능",
    content:
      "Occaecat reprehenderit anim sunt proident pariatur exercitation irure qui laborum sit mollit dolor. Aute aliqua laboris dolore veniam anim tempor elit laborum veniam deserunt amet cillum. Est duis magna velit exercitation eu magna consectetur. Ad cupidatat consequat nulla Lorem ex ea cupidatat nulla voluptate sint nulla irure labore esse. Sunt fugiat nostrud amet anim veniam ullamco nulla.",
    author: {
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
    },
    createdOn: Faker.date.past(10),
  },
];

export default mock_data;
