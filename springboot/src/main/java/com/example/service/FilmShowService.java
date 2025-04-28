package com.example.service;

import com.example.common.enums.RoleEnum;
import com.example.entity.Account;
import com.example.entity.Area;
import com.example.entity.FilmShow;
import com.example.mapper.AreaMapper;
import com.example.mapper.FilmShowMapper;
import com.example.utils.TokenUtils;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 放映记录
 */
@Service
public class FilmShowService {

    @Resource
    private FilmShowMapper filmShowMapper;

    public void add(FilmShow filmShow) {
        Account currentUser = TokenUtils.getCurrentUser();
        filmShow.setCinemaId(currentUser.getId());
        filmShowMapper.insert(filmShow);
    }

    public void updateById(FilmShow filmShow) {
        filmShowMapper.updateById(filmShow);
    }

    public void deleteById(Integer id) {
        filmShowMapper.deleteById(id);
    }

    public void deleteBatch(List<Integer> ids) {
        for (Integer id : ids) {
            filmShowMapper.deleteById(id);
        }
    }

    public FilmShow selectById(Integer id) {
        return filmShowMapper.selectById(id);
    }

    public List<FilmShow> selectAll(FilmShow filmShow) {
        return filmShowMapper.selectAll(filmShow);
    }

    public PageInfo<FilmShow> selectPage(FilmShow filmShow, Integer pageNum, Integer pageSize) {
        Account currentUser = TokenUtils.getCurrentUser();
        if (RoleEnum.CINEMA.name().equals(currentUser.getRole())) {
            filmShow.setCinemaId(currentUser.getId());
        }
        PageHelper.startPage(pageNum, pageSize);
        List<FilmShow> list = filmShowMapper.selectAll(filmShow);
        return PageInfo.of(list);
    }

}
