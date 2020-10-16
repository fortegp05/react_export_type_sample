export type Sample = {
  id: number;
  title: string;
  descriptions: [
    {
      id: number;
      softwareDevelopmentId: number;
      description: string;
    },
  ];
};

const isSample = (arg: unknown): boolean => {
  const sd = arg as Sample;

  return (
    typeof sd.id === 'number' &&
    typeof sd.title === 'string' &&
    typeof sd.descriptions === 'object' &&
    typeof sd.descriptions[0].id === 'number' &&
    typeof sd.descriptions[0].description === 'string'
  );
};

const isSamples = (
  args: unknown[],
): args is Sample[] =>
  !args.some((arg) => !isSample(arg));

export { isSample, isSamples };
