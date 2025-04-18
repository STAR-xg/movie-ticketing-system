package com.example.service;

import cn.hutool.core.date.DateUtil;
import com.example.entity.Film;
import com.example.mapper.FilmMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 电影信息业务层方法
 */
@Service
public class FilmService {

    @Resource
    private FilmMapper filmMapper;

    public void add(Film film) {
        film.setTime(DateUtil.now());
        filmMapper.insert(film);
    }

    public void updateById(Film film) {
        filmMapper.updateById(film);
    }

    public void deleteById(Integer id) {
        filmMapper.deleteById(id);
    }

    public void deleteBatch(List<Integer> ids) {
        for (Integer id : ids) {
            filmMapper.deleteById(id);
        }
    }

    public Film selectById(Integer id) {
        return filmMapper.selectById(id);
    }

    public List<Film> selectAll(Film film) {
        return filmMapper.selectAll(film);
    }

    public PageInfo<Film> selectPage(Film film, Integer pageNum, Integer pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<Film> list = filmMapper.selectAll(film);
        return PageInfo.of(list);
    }

}
