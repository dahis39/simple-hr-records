package com.tom.mappers;

import com.tom.domain.Transfer;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by tom on 1/9/2017.
 */
public interface TransferMapper {

    public List<Transfer> selectTransfersForEmployee(Integer emp_no);

    public boolean insertEmpTransfer(Transfer transfer);

    public boolean insertMngTransfer(Transfer transfer);

    public boolean updateEmpTransfer(@Param("oldTransfer") Transfer oldTransfer,@Param("newTransfer") Transfer newTransfer);

    public boolean updateMngTransfer(Transfer transfer);

    public boolean deleteEmpTransfer(Transfer transfer);

    public boolean deleteMngTransfer(Transfer transfer);
}
