import Ionicons from 'react-native-vector-icons/Ionicons';
import { Heading, Button, FlexBox } from '../../components';
import { IPaginationProps } from '../../interfaces';
import { Colors } from '../../constants';

function Pagination(props: IPaginationProps) {
  const { data, currentPage, setcurrentPage, isPreviousData, isFetching } = props;

  const handlePrevPage = () => {
    setcurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  }

  const handleNextPage = () => {
    if (!isPreviousData && data && data.length > 0) {
      setcurrentPage((prevPage) => prevPage + 1);
    }
  }

  return (
    <FlexBox flexDirection='row' alignItems='center' columnGap={12}>
      <Button
        backgroundColor={Colors.PURPLE}
        titleColor={Colors.WHITE}
        padding={9}
        isDisabled={currentPage === 0}
        onPress={handlePrevPage}
      >
        <Ionicons 
          name='caret-back'
          size={16}
          color={currentPage === 0 ? Colors.GAINSBORO : Colors.WHITE}
        />
      </Button>
      <Heading 
        title={`${currentPage + 1}`}
        type={5}
        fontWeight='500'
      />
      <Button
        backgroundColor={Colors.PURPLE}
        titleColor={Colors.WHITE}
        padding={9}
        isDisabled={isPreviousData || isFetching}
        onPress={handleNextPage}
      >
        <Ionicons 
          name='caret-forward'
          size={16}
          color={isPreviousData || isFetching ? Colors.GAINSBORO : Colors.WHITE}
        />
      </Button>
    </FlexBox>
  )
}

export default Pagination;
