package com.example.service;

import cn.hutool.core.date.DateUtil;
import cn.hutool.core.util.ObjectUtil;
import cn.hutool.json.JSONUtil;
import com.example.entity.Film;
import com.example.entity.Type;
import com.example.mapper.FilmMapper;
import com.example.mapper.TypeMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 电影信息业务层方法
 */
@Service
public class FilmService {

    @Resource
    private FilmMapper filmMapper;
    @Resource
    private TypeMapper typeMapper;

    public void add(Film film) {

        film.setTypeIds(JSONUtil.toJsonStr(film.getIds()));
        filmMapper.insert(film);
    }

    public void updateById(Film film) {
        film.setTypeIds(JSONUtil.toJsonStr(film.getIds()));
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
        for (Film dbfilm : list) {
            List<Integer> ids=JSONUtil.toList(dbfilm.getTypeIds(), Integer.class);
            dbfilm.setIds(ids);
            List<String> tmplist=new ArrayList<>();
            for(Integer typeId:ids){
                Type type=typeMapper.selectById(typeId);
                if(ObjectUtil.isNotEmpty(type)){
                    tmplist.add(type.getTitle());
                }
            }
            dbfilm.setTypes(tmplist);
        }
        return PageInfo.of(list);
    }

}
