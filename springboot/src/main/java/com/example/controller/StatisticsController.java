package com.example.controller;

import cn.hutool.core.date.DateUtil;
import com.example.common.Result;
import com.example.entity.Cinema;
import com.example.entity.Film;
import com.example.entity.Orders;
import com.example.service.CinemaService;
import com.example.service.FilmService;
import com.example.service.OrdersService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/statistics")
public class StatisticsController {

    @Resource
    private FilmService filmService;
    @Resource
    private CinemaService cinemaService;
    @Resource
    private OrdersService ordersService;

    @GetMapping("/base")
    public Result base() {
        Map<String, Object> map = new HashMap<>();

        List<Orders> orders = ordersService.selectAll(new Orders());
        double todayPrice = orders.stream()
                .filter(x -> !"已退票".equals(x.getStatus()) && x.getCreateTime().contains(DateUtil.today()))
                .mapToDouble(Orders::getPrice)
                .sum();

        double totalPrice = orders.stream()
                .filter(x -> !"已退票".equals(x.getStatus()))
                .mapToDouble(Orders::getPrice)
                .sum();

        map.put("filmNum", filmService.selectAll(new Film()).size());
        map.put("cinemaNum", cinemaService.selectAll(new Cinema()).size());
        map.put("todayPrice", todayPrice);
        map.put("totalPrice", totalPrice);
        return Result.success(map);
    }
}